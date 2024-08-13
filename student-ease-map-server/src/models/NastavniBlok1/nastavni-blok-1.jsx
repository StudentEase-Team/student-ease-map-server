import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function NastavniBlok1(props) {
  const { nodes, materials } = useGLTF('/NastavniBlok1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.Kafe.geometry}
        material={materials['Material.028']}
        position={[-1.376, 0.251, 0.457]}
        scale={[0.299, 0.153, 0.118]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.UlazHol.geometry}
        material={materials.Material}
        scale={[1.684, 0.105, 1.59]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.DugackiHodnik.geometry}
        material={nodes.DugackiHodnik.material}
        position={[0.682, 0, 2.587]}
        scale={[1, 0.105, 1]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.GridDeo.geometry}
        material={materials['Material.001']}
        position={[-0.806, 0, 6.537]}
        scale={[2.491, 0.105, 0.676]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.VrataUlazna.geometry}
        material={materials['Material.002']}
        position={[1.468, 0.251, -0.009]}
        scale={[0.208, 0.153, 0.532]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.VrataUlazna001.geometry}
        material={materials['Material.003']}
        position={[1.678, 0.267, -0.006]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.191, 0.186, 0.186]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.Protir.geometry}
        material={materials['Material.004']}
        position={[1.468, 0.251, -1.038]}
        scale={[0.208, 0.153, 0.245]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.Portir.geometry}
        material={materials['Material.005']}
        position={[1.678, 0.267, -0.888]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.195, 0.186, 0.186]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.ScenDizajn.geometry}
        material={materials['Material.006']}
        position={[-0.165, 0.251, -0.769]}
        scale={[0.937, 0.153, 0.517]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.Biblioteka.geometry}
        material={materials['Material.007']}
        position={[-0.182, 0.251, 1.075]}
        scale={[0.937, 0.153, 0.517]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B008.geometry}
        material={materials['Material.008']}
        position={[0.558, 0.251, 1.075]}
        scale={[0.201, 0.153, 0.517]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B001001.geometry}
        material={materials['Material.009']}
        position={[1.474, 0.251, 0.657]}
        scale={[0.207, 0.153, 0.137]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B002001.geometry}
        material={materials['Material.010']}
        position={[1.474, 0.251, 0.933]}
        scale={[0.207, 0.153, 0.137]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B003001.geometry}
        material={materials['Material.011']}
        position={[1.474, 0.251, 1.208]}
        scale={[0.207, 0.153, 0.137]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B004001.geometry}
        material={materials['Material.012']}
        position={[1.474, 0.251, 1.484]}
        scale={[0.207, 0.153, 0.137]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.HodnikSkriptarnica.geometry}
        material={nodes.HodnikSkriptarnica.material}
        position={[0.634, 0, -2.51]}
        scale={[0.699, 0.105, 0.369]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.Skriptarnica.geometry}
        material={materials['Material.013']}
        position={[1.01, 0.251, -2.09]}
        scale={[0.328, 0.153, 0.798]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B005001.geometry}
        material={materials['Material.008']}
        position={[1.474, 0.251, 1.687]}
        scale={[0.207, 0.153, 0.07]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B006001.geometry}
        material={materials['Material.008']}
        position={[1.474, 0.251, 1.827]}
        scale={[0.207, 0.153, 0.07]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B007.geometry}
        material={materials['Material.008']}
        position={[1.214, 0.251, 2.228]}
        scale={[0.465, 0.153, 0.328]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC1.geometry}
        material={materials['Material.017']}
        position={[1.214, 0.251, 2.875]}
        scale={[0.465, 0.153, 0.328]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC1HODNIK.geometry}
        material={materials['Material.017']}
        position={[0.957, 0.251, 3.61]}
        scale={[0.198, 0.153, 0.427]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.KodWCUcionica.geometry}
        material={materials['Material.008']}
        position={[1.214, 0.251, 4.363]}
        scale={[0.465, 0.153, 0.328]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.GR1.geometry}
        material={materials['Material.030']}
        position={[1.214, 0.251, 5.246]}
        scale={[0.465, 0.153, 0.54]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC2.geometry}
        material={materials['Material.031']}
        position={[1.214, 0.251, 6.38]}
        scale={[0.465, 0.153, 0.527]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.GR2.geometry}
        material={materials['Material.032']}
        position={[-1.212, 0.251, 6.52]}
        scale={[2.09, 0.153, 0.676]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.ProstorijaKodStepenica.geometry}
        material={materials['Material.018']}
        position={[-1.428, 0.251, -1.069]}
        scale={[0.256, 0.153, 0.219]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC2001.geometry}
        material={materials['Material.008']}
        position={[1.214, 0.251, 7.062]}
        scale={[0.465, 0.153, 0.145]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.VrataUlazna002.geometry}
        material={materials['Material.034']}
        position={[1.477, 0.408, -0.006]}
        rotation={[0, 1.571, 0]}
        scale={[0.191, 0.186, 0.186]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B002.geometry}
        material={materials['Material.036']}
        position={[1.692, 0.267, 0.932]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.143, 0.155, 0.155]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B001.geometry}
        material={materials['Material.037']}
        position={[1.692, 0.267, 0.661]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.143, 0.155, 0.155]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B003.geometry}
        material={materials['Material.038']}
        position={[1.692, 0.267, 1.208]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.143, 0.155, 0.155]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B004.geometry}
        material={materials['Material.039']}
        position={[1.692, 0.267, 1.459]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.143, 0.155, 0.155]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B005.geometry}
        material={materials['Material.040']}
        position={[1.692, 0.267, 1.654]}
        rotation={[2.653, 0, -Math.PI / 2]}
        scale={[0.143, 0.155, 0.155]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B006.geometry}
        material={materials['Material.041']}
        position={[1.692, 0.267, 1.792]}
        rotation={[2.653, 0, -Math.PI / 2]}
        scale={[0.143, 0.155, 0.155]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B006002.geometry}
        material={materials['Material.042']}
        position={[1.504, 0.423, 1.792]}
        rotation={[-3.132, 0.053, -0.001]}
        scale={[0.143, 0.155, 0.155]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B005002.geometry}
        material={materials['Material.043']}
        position={[1.504, 0.423, 1.655]}
        rotation={[-3.132, 0.053, -0.001]}
        scale={[0.143, 0.155, 0.155]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B004002.geometry}
        material={materials['Material.044']}
        position={[1.504, 0.423, 1.466]}
        rotation={[-3.132, 0.053, -0.001]}
        scale={[0.143, 0.155, 0.155]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B003002.geometry}
        material={materials['Material.045']}
        position={[1.504, 0.423, 1.212]}
        rotation={[-3.132, 0.053, -0.001]}
        scale={[0.143, 0.155, 0.155]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B002002.geometry}
        material={materials['Material.046']}
        position={[1.504, 0.423, 0.928]}
        rotation={[-3.132, 0.053, -0.001]}
        scale={[0.143, 0.155, 0.155]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B001002.geometry}
        material={materials['Material.047']}
        position={[1.504, 0.423, 0.662]}
        rotation={[-3.132, 0.053, -0.001]}
        scale={[0.143, 0.155, 0.155]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B001003.geometry}
        material={materials['Material.052']}
        position={[1.261, 0.267, 0.661]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.143, 0.155, 0.155]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B002003.geometry}
        material={materials['Material.053']}
        position={[1.261, 0.267, 0.932]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.143, 0.155, 0.155]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B003003.geometry}
        material={materials['Material.051']}
        position={[1.261, 0.267, 1.208]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.143, 0.155, 0.155]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B004003.geometry}
        material={materials['Material.050']}
        position={[1.261, 0.267, 1.459]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.143, 0.155, 0.155]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B005003.geometry}
        material={materials['Material.049']}
        position={[1.261, 0.267, 1.654]}
        rotation={[0.489, 0, Math.PI / 2]}
        scale={[0.143, 0.155, 0.155]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.B006003.geometry}
        material={materials['Material.048']}
        position={[1.261, 0.267, 1.792]}
        rotation={[0.489, 0, Math.PI / 2]}
        scale={[0.143, 0.155, 0.155]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC_Stair.geometry}
        material={materials['Material.019']}
        position={[1.419, 0.136, 3.61]}
        scale={[0.264, 0.037, 0.041]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC_Stair001.geometry}
        material={materials['Material.020']}
        position={[1.419, 0.157, 3.56]}
        scale={[0.264, 0.037, 0.041]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC_Stair002.geometry}
        material={materials['Material.021']}
        position={[1.419, 0.187, 3.51]}
        scale={[0.264, 0.037, 0.041]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC_Stair003.geometry}
        material={materials['Material.022']}
        position={[1.419, 0.217, 3.46]}
        scale={[0.264, 0.037, 0.041]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC_Stair004.geometry}
        material={materials['Material.023']}
        position={[1.419, 0.247, 3.41]}
        scale={[0.264, 0.037, 0.041]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC_Stair005.geometry}
        material={materials['Material.024']}
        position={[1.419, 0.277, 3.36]}
        scale={[0.264, 0.037, 0.041]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC_Stair006.geometry}
        material={materials['Material.025']}
        position={[1.419, 0.307, 3.31]}
        scale={[0.264, 0.037, 0.041]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC_Stair007.geometry}
        material={materials['Material.026']}
        position={[1.419, 0.337, 3.26]}
        scale={[0.264, 0.037, 0.041]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC_Stair008.geometry}
        material={materials['Material.027']}
        position={[1.419, 0.367, 3.21]}
        scale={[0.264, 0.037, 0.041]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC_Stair009.geometry}
        material={materials['Material.019']}
        position={[-1.225, 0.136, 0.072]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.264, 0.037, 0.041]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC_Stair010.geometry}
        material={materials['Material.020']}
        position={[-1.275, 0.157, 0.072]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.264, 0.037, 0.041]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC_Stair011.geometry}
        material={materials['Material.021']}
        position={[-1.325, 0.187, 0.072]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.264, 0.037, 0.041]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC_Stair012.geometry}
        material={materials['Material.022']}
        position={[-1.375, 0.217, 0.072]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.264, 0.037, 0.041]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC_Stair013.geometry}
        material={materials['Material.023']}
        position={[-1.425, 0.247, 0.072]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.264, 0.037, 0.041]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC_Stair014.geometry}
        material={materials['Material.024']}
        position={[-1.475, 0.277, 0.072]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.264, 0.037, 0.041]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC_Stair015.geometry}
        material={materials['Material.025']}
        position={[-1.525, 0.307, 0.072]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.264, 0.037, 0.041]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC_Stair016.geometry}
        material={materials['Material.026']}
        position={[-1.575, 0.337, 0.072]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.264, 0.037, 0.041]}
      />
      <mesh
castShadow={false} receiveShadow={false}
        geometry={nodes.WC_Stair017.geometry}
        material={materials['Material.027']}
        position={[-1.625, 0.367, 0.072]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.264, 0.037, 0.041]}
      />
    </group>
  )
}

useGLTF.preload('/NastavniBlok1.glb')