
import React, { useState, useEffect } from "react";
import styles from "./NNBackground.module.css";

interface Node {
  id: number;
  x: number;
  y: number;
  info: string;
}

interface Connection {
  id: string;
  source: number;
  target: number;
}

export const NNBackground: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);

  useEffect(() => {
    // Generate a horizontal binary‑tree layout
    const rootX = 10; // left side
    const rootY = 50; // vertically centered
    const layers = 4; // depth of the tree (horizontal levels)
    const horizontalStep = 20; // percent right per layer
    let nextId = 1;
    const generatedNodes: Node[] = [{ id: 0, x: rootX, y: rootY, info: "Root" }];
    const generatedConnections: Connection[] = [];
    // Track node ids of previous column to connect children
    let previousLevelIds = [0];
    for (let depth = 1; depth <= layers; depth++) {
      const nodeCount = Math.pow(2, depth); // nodes in this column
      const x = rootX + depth * horizontalStep;
      const currentLevelIds: number[] = [];
      for (let i = 0; i < nodeCount; i++) {
        // Evenly distribute vertically
        const y = ((i + 1) / (nodeCount + 1)) * 100; // percentage height
        const id = nextId++;
        generatedNodes.push({ id, x, y, info: `Layer ${depth} Node ${i + 1}` });
        currentLevelIds.push(id);
        // Parent is the node in previous column at index floor(i/2)
        const parentIdx = Math.floor(i / 2);
        const parentId = previousLevelIds[parentIdx];
        generatedConnections.push({ id: `c-${parentId}-${id}`, source: parentId, target: id });
      }
      previousLevelIds = currentLevelIds;
    }

    setNodes(generatedNodes);
    setConnections(generatedConnections);
  }, []);

  const handleNodeHover = (node: Node) => {
    setHoveredNode(node);
  };

  const handleNodeHoverOut = () => {
    setHoveredNode(null);
  };

  return (
    <div className={styles.backgroundContainer}>
      {connections.map((conn) => {
        const sourceNode = nodes.find((node) => node.id === conn.source);
        const targetNode = nodes.find((node) => node.id === conn.target);

        if (!sourceNode || !targetNode) return null;

        // Calculate line position and rotation
        const dx = targetNode.x - sourceNode.x;
        const dy = targetNode.y - sourceNode.y;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        const length = Math.sqrt(dx * dx + dy * dy);

        return (
          <div
            key={conn.id}
            className={styles.connectionLine}
            style={{
              left: `${sourceNode.x}%`,
              top: `${sourceNode.y}%`,
              width: `${length}%`,
              transform: `rotate(${angle}deg)`
            }}
          ></div>
        );
      })}
      {nodes.map((node) => (
        <div
          key={node.id}
          className={styles.node}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          onMouseEnter={() => handleNodeHover(node)}
          onMouseLeave={handleNodeHoverOut}
        ></div>
      ))}

      {hoveredNode && (
        <div
          className={styles.tooltip}
          style={{
            left: `${hoveredNode.x + 5}%`,
            top: `${hoveredNode.y}%`,
          }}
        >
          {hoveredNode.info}
        </div>
      )}
    </div>
  );
};

export default NNBackground;
