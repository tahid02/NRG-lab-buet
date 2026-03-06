import React, { useMemo, useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

const C60_ATOMS = [
  { x: 0.944, y: 0.286, z: 3.239, element: 'C' },
  { x: 2.229, y: 0.454, z: 2.704, element: 'C' },
  { x: 2.612, y: -0.809, z: 2.208, element: 'C' },
  { x: -0.771, y: -1.437, z: 3.016, element: 'C' },
  { x: -1.803, y: -0.478, z: 3.007, element: 'C' },
  { x: -1.447, y: 0.889, z: 3.106, element: 'C' },
  { x: -0.091, y: 1.234, z: 3.208, element: 'C' },
  { x: 2.487, y: 1.642, z: 1.959, element: 'C' },
  { x: 1.419, y: 2.549, z: 1.861, element: 'C' },
  { x: 0.145, y: 2.432, z: 2.461, element: 'C' },
  { x: 3.262, y: -0.849, z: 0.945, element: 'C' },
  { x: 3.598, y: 0.301, z: 0.201, element: 'C' },
  { x: -1.107, y: -2.525, z: 2.165, element: 'C' },
  { x: 1.965, y: -2.904, z: 0.405, element: 'C' },
  { x: 2.915, y: -1.911, z: 0.063, element: 'C' },
  { x: -2.755, y: -0.929, z: 2.056, element: 'C' },
  { x: -2.334, y: -2.184, z: 1.554, element: 'C' },
  { x: -1.08, y: 2.857, z: 1.917, element: 'C' },
  { x: -2.009, y: 1.852, z: 2.221, element: 'C' },
  { x: 1.029, y: -3.355, z: -0.557, element: 'C' },
  { x: -0.212, y: -3.422, z: 0.091, element: 'C' },
  { x: 3.407, y: -0.02, z: -1.169, element: 'C' },
  { x: 2.96, y: -1.356, z: -1.245, element: 'C' },
  { x: -2.921, y: 1.353, z: 1.256, element: 'C' },
  { x: -3.344, y: 0.018, z: 1.165, element: 'C' },
  { x: -1.446, y: -3.079, z: -0.505, element: 'C' },
  { x: -2.52, y: -2.485, z: 0.172, element: 'C' },
  { x: 2.004, y: -1.833, z: -2.177, element: 'C' },
  { x: 1.057, y: -2.826, z: -1.884, element: 'C' },
  { x: 2.302, y: 2.167, z: -1.532, element: 'C' },
  { x: 2.754, y: 0.91, z: -2.027, element: 'C' },
  { x: 0.208, y: 3.424, z: -0.075, element: 'C' },
  { x: -1.028, y: 3.362, z: 0.583, element: 'C' },
  { x: -3.547, y: -0.287, z: -0.204, element: 'C' },
  { x: -3.128, y: -1.55, z: -0.699, element: 'C' },
  { x: 0.046, y: 3.138, z: -1.465, element: 'C' },
  { x: 1.116, y: 2.525, z: -2.163, element: 'C' },
  { x: 1.8, y: 0.498, z: -2.964, element: 'C' },
  { x: 1.423, y: -0.899, z: -3.06, element: 'C' },
  { x: -0.156, y: -2.435, z: -2.472, element: 'C' },
  { x: -1.409, y: -2.544, z: -1.831, element: 'C' },
  { x: 0.045, y: -1.277, z: -3.258, element: 'C' },
  { x: 0.763, y: 1.502, z: -3.076, element: 'C' },
  { x: -0.035, y: -3.151, z: 1.482, element: 'C' },
  { x: 1.326, y: -2.831, z: 1.668, element: 'C' },
  { x: 1.673, y: -1.786, z: 2.568, element: 'C' },
  { x: 0.596, y: -1.098, z: 3.154, element: 'C' },
  { x: 3.168, y: 1.561, z: 0.719, element: 'C' },
  { x: 2.508, y: 2.443, z: -0.156, element: 'C' },
  { x: 1.432, y: 3.05, z: 0.524, element: 'C' },
  { x: -2.459, y: -1.618, z: -1.946, element: 'C' },
  { x: -0.997, y: -0.275, z: -3.366, element: 'C' },
  { x: -2.228, y: -0.44, z: -2.719, element: 'C' },
  { x: -3.32, y: 0.889, z: -0.969, element: 'C' },
  { x: -2.895, y: 1.881, z: -0.071, element: 'C' },
  { x: -2.651, y: 0.817, z: -2.222, element: 'C' },
  { x: -1.921, y: 2.857, z: -0.377, element: 'C' },
  { x: -1.299, y: 2.809, z: -1.657, element: 'C' },
  { x: -0.622, y: 1.129, z: -3.266, element: 'C' },
  { x: -1.658, y: 1.769, z: -2.562, element: 'C' },
];

const C60_BONDS = [
  { a1: 0, a2: 6, type: 1 },
  { a1: 1, a2: 0, type: 2 },
  { a1: 2, a2: 45, type: 2 },
  { a1: 2, a2: 1, type: 1 },
  { a1: 3, a2: 4, type: 1 },
  { a1: 4, a2: 5, type: 2 },
  { a1: 6, a2: 5, type: 1 },
  { a1: 7, a2: 8, type: 2 },
  { a1: 7, a2: 1, type: 1 },
  { a1: 8, a2: 9, type: 1 },
  { a1: 9, a2: 17, type: 1 },
  { a1: 9, a2: 6, type: 2 },
  { a1: 10, a2: 2, type: 1 },
  { a1: 11, a2: 10, type: 2 },
  { a1: 11, a2: 47, type: 1 },
  { a1: 12, a2: 16, type: 2 },
  { a1: 12, a2: 3, type: 1 },
  { a1: 13, a2: 44, type: 1 },
  { a1: 14, a2: 13, type: 2 },
  { a1: 14, a2: 10, type: 1 },
  { a1: 15, a2: 4, type: 1 },
  { a1: 16, a2: 15, type: 1 },
  { a1: 17, a2: 18, type: 2 },
  { a1: 18, a2: 5, type: 1 },
  { a1: 19, a2: 13, type: 1 },
  { a1: 19, a2: 20, type: 2 },
  { a1: 20, a2: 25, type: 1 },
  { a1: 20, a2: 43, type: 1 },
  { a1: 21, a2: 11, type: 1 },
  { a1: 22, a2: 21, type: 1 },
  { a1: 22, a2: 14, type: 1 },
  { a1: 23, a2: 18, type: 1 },
  { a1: 24, a2: 23, type: 1 },
  { a1: 24, a2: 15, type: 2 },
  { a1: 25, a2: 26, type: 1 },
  { a1: 26, a2: 16, type: 1 },
  { a1: 27, a2: 22, type: 2 },
  { a1: 27, a2: 28, type: 1 },
  { a1: 28, a2: 39, type: 2 },
  { a1: 28, a2: 19, type: 1 },
  { a1: 29, a2: 36, type: 2 },
  { a1: 29, a2: 48, type: 1 },
  { a1: 30, a2: 21, type: 2 },
  { a1: 30, a2: 29, type: 1 },
  { a1: 31, a2: 32, type: 1 },
  { a1: 32, a2: 17, type: 1 },
  { a1: 33, a2: 24, type: 1 },
  { a1: 34, a2: 26, type: 2 },
  { a1: 34, a2: 33, type: 1 },
  { a1: 35, a2: 57, type: 2 },
  { a1: 35, a2: 31, type: 1 },
  { a1: 36, a2: 35, type: 1 },
  { a1: 37, a2: 30, type: 1 },
  { a1: 37, a2: 42, type: 1 },
  { a1: 38, a2: 37, type: 2 },
  { a1: 38, a2: 27, type: 1 },
  { a1: 38, a2: 41, type: 1 },
  { a1: 39, a2: 40, type: 1 },
  { a1: 40, a2: 50, type: 1 },
  { a1: 40, a2: 25, type: 2 },
  { a1: 41, a2: 51, type: 2 },
  { a1: 41, a2: 39, type: 1 },
  { a1: 42, a2: 58, type: 2 },
  { a1: 42, a2: 36, type: 1 },
  { a1: 43, a2: 12, type: 1 },
  { a1: 44, a2: 43, type: 2 },
  { a1: 44, a2: 45, type: 1 },
  { a1: 45, a2: 46, type: 1 },
  { a1: 46, a2: 0, type: 1 },
  { a1: 46, a2: 3, type: 2 },
  { a1: 47, a2: 7, type: 1 },
  { a1: 48, a2: 47, type: 2 },
  { a1: 48, a2: 49, type: 1 },
  { a1: 49, a2: 31, type: 2 },
  { a1: 49, a2: 8, type: 1 },
  { a1: 50, a2: 34, type: 1 },
  { a1: 51, a2: 58, type: 1 },
  { a1: 51, a2: 52, type: 1 },
  { a1: 52, a2: 50, type: 2 },
  { a1: 52, a2: 55, type: 1 },
  { a1: 53, a2: 33, type: 2 },
  { a1: 53, a2: 54, type: 1 },
  { a1: 54, a2: 23, type: 2 },
  { a1: 55, a2: 53, type: 1 },
  { a1: 56, a2: 32, type: 2 },
  { a1: 56, a2: 54, type: 1 },
  { a1: 57, a2: 56, type: 1 },
  { a1: 58, a2: 59, type: 1 },
  { a1: 59, a2: 55, type: 2 },
  { a1: 59, a2: 57, type: 1 },
];

// Performance Monitor Component
const PerformanceMonitor = () => {
  const frameCount = useRef(0);
  const lastTime = useRef(Date.now());
  
  useFrame(() => {
    frameCount.current++;
    const now = Date.now();
    if (now - lastTime.current >= 1000) {
      const fps = frameCount.current;
      if (fps < 30) {
        console.warn(`[BuckyballScene] Low FPS detected: ${fps}`);
      }
      frameCount.current = 0;
      lastTime.current = now;
    }
  });
  
  return null;
};

// Optimized Instanced Atoms Component
const InstancedAtoms = React.memo(() => {
  const atomsGeometry = useMemo(() => new THREE.SphereGeometry(0.15, 12, 12), []);
  const atomsMaterial = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: '#ffffff', 
    metalness: 0.7, 
    roughness: 0.3 
  }), []);

  const instancedAtoms = useMemo(() => {
    const mesh = new THREE.InstancedMesh(atomsGeometry, atomsMaterial, C60_ATOMS.length);
    C60_ATOMS.forEach((atom, i) => {
      const matrix = new THREE.Matrix4();
      matrix.setPosition(atom.x, atom.y, atom.z);
      mesh.setMatrixAt(i, matrix);
    });
    return mesh;
  }, [atomsGeometry, atomsMaterial]);

  return <primitive object={instancedAtoms} />;
});

// Optimized Instanced Bonds Component
const InstancedBonds = React.memo(() => {
  const bondGeometries = useMemo(() => ({
    type1: new THREE.CylinderGeometry(0.04, 0.04, 1, 8),
    type2: new THREE.CylinderGeometry(0.05, 0.05, 1, 8),
  }), []);
  
  const bondMaterial = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: '#cccccc', 
    metalness: 0.7, 
    roughness: 0.3 
  }), []);

  const { type1Bonds, type2Bonds } = useMemo(() => {
    const type1 = [];
    const type2 = [];
    
    C60_BONDS.forEach(bond => {
      const vStart = new THREE.Vector3(
        C60_ATOMS[bond.a1].x,
        C60_ATOMS[bond.a1].y,
        C60_ATOMS[bond.a1].z
      );
      const vEnd = new THREE.Vector3(
        C60_ATOMS[bond.a2].x,
        C60_ATOMS[bond.a2].y,
        C60_ATOMS[bond.a2].z
      );
      
      const distance = vStart.distanceTo(vEnd);
      const midpoint = vStart.clone().add(vEnd).multiplyScalar(0.5);
      const direction = vEnd.clone().sub(vStart).normalize();
      
      const quaternion = new THREE.Quaternion();
      quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
      
      const bondData = { position: midpoint, quaternion, length: distance };
      
      if (bond.type === 1) {
        type1.push(bondData);
      } else {
        type2.push(bondData);
      }
    });
    
    return { type1Bonds: type1, type2Bonds: type2 };
  }, []);

  const instancedType1 = useMemo(() => {
    const mesh = new THREE.InstancedMesh(bondGeometries.type1, bondMaterial, type1Bonds.length);
    type1Bonds.forEach((bond, i) => {
      const matrix = new THREE.Matrix4();
      matrix.compose(bond.position, bond.quaternion, new THREE.Vector3(1, bond.length, 1));
      mesh.setMatrixAt(i, matrix);
    });
    return mesh;
  }, [bondGeometries.type1, bondMaterial, type1Bonds]);

  const instancedType2 = useMemo(() => {
    const mesh = new THREE.InstancedMesh(bondGeometries.type2, bondMaterial, type2Bonds.length);
    type2Bonds.forEach((bond, i) => {
      const matrix = new THREE.Matrix4();
      matrix.compose(bond.position, bond.quaternion, new THREE.Vector3(1, bond.length, 1));
      mesh.setMatrixAt(i, matrix);
    });
    return mesh;
  }, [bondGeometries.type2, bondMaterial, type2Bonds]);

  return (
    <>
      <primitive object={instancedType1} />
      <primitive object={instancedType2} />
    </>
  );
});

export function BuckyballScene() {
  const [scale, setScale] = useState(0.8);
  const [isVisible, setIsVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const containerRef = useRef(null);

  // Desktop detection and responsive scale
  useEffect(() => {
    let timeoutId;
    const updateDevice = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const w = window.innerWidth;
        setIsDesktop(w >= 1024);
        
        if (w < 640) {
          setScale(1.1);
        } else if (w < 1024) {
          setScale(1.0);
        } else {
          setScale(0.9);
        }
      }, 150);
    };
    updateDevice();
    window.addEventListener('resize', updateDevice);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateDevice);
    };
  }, []);

  // Intersection Observer for pause-when-hidden
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Desktop-specific optimizations
  const desktopDpr = isDesktop ? 1 : window.devicePixelRatio;
  const desktopLightIntensity = isDesktop ? 0.8 : 1.0;
  const desktopFloatSpeed = isDesktop ? 1.0 : 1.5;
  const desktopRotationIntensity = isDesktop ? 0.2 : 0.3;
  const desktopFloatIntensity = isDesktop ? 0.2 : 0.3;

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={desktopDpr}
        frameloop={isVisible ? 'always' : 'demand'}
      >
        <PerformanceMonitor />
        
        {/* Desktop-optimized lighting - reduced intensity on desktop */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={desktopLightIntensity} castShadow />

        {/* Desktop-optimized animations - reduced intensity on desktop */}
        <Float 
          speed={desktopFloatSpeed} 
          rotationIntensity={desktopRotationIntensity} 
          floatIntensity={desktopFloatIntensity}
        >
          <group scale={scale}>
            <InstancedBonds />
            <InstancedAtoms />
          </group>
        </Float>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minDistance={5}
          maxDistance={15}
          autoRotate={false}
          enableDamping={false}
        />
      </Canvas>
    </div>
  );
}
