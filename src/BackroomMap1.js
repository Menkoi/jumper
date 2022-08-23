/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Huuxloc (https://sketchfab.com/rjh41)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/backrooms-1da6a7f2e0294ba9a4123f61244811a8
title: BackRooms
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';
import Backroom from './Models/Backroom.glb';
import { useConvexPolyhedron, useBox } from "@react-three/cannon";

function Wall(props) {
  //const texture = useLoader(TextureLoader, Default)
  const [ref] = useBox(() => ({
    mass: 10,
    type: 'Static',
    ...props
  }));
  
}


export default function BackroomMap1({ ...props }) {
  //const group = useRef()
  const { nodes, materials } = useGLTF(Backroom)
  const [ref] = useConvexPolyhedron(() => ({ mass: 100, ...props, type:'Static', 
  position: [18,0,-7], rotation: [0,-0.14,0]
}));
  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.67}>
        <group rotation={[Math.PI / 2, 0, 0]}>

          {/* Floor Carpet Texture */}
          <group position={[-10,0,-11]} scale={[2,1,2.3]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.Carpet} /> 
          </group>
        

        {/* Roof */}
         <group position={[-10,1.92,-11]} scale={[2,1,2.3]}>
            <mesh geometry={nodes.Object_51.geometry} material={materials.CeilingFrame} /> 
          </group>
          {/* Row 1 */}
          <group position={[-0.01, 1.94, 3.4]}>
            <mesh geometry={nodes.Object_53.geometry} material={materials.Tiles} />
            <mesh geometry={nodes.Object_54.geometry} material={materials.Light} />
          </group>
          <group position={[-0.01, 1.94, -12.6]}>
            <mesh geometry={nodes.Object_53.geometry} material={materials.Tiles} />
            <mesh geometry={nodes.Object_54.geometry} material={materials.Light} />
          </group>
          <group position={[-0.01, 1.94, -28.6]}>
            <mesh geometry={nodes.Object_53.geometry} material={materials.Tiles} />
            <mesh geometry={nodes.Object_54.geometry} material={materials.Light} />
          </group>
          {/*Row 2 */}
          <group position={[-16.7, 1.94, 3.4]}>
            <mesh geometry={nodes.Object_53.geometry} material={materials.Tiles} />
            <mesh geometry={nodes.Object_54.geometry} material={materials.Light} />
          </group>
          <group position={[-16.7, 1.94, -12.6]}>
            <mesh geometry={nodes.Object_53.geometry} material={materials.Tiles} />
            <mesh geometry={nodes.Object_54.geometry} material={materials.Light} />
          </group> 
          <group position={[-16.7, 1.94, -28.6]}>
            <mesh geometry={nodes.Object_53.geometry} material={materials.Tiles} />
            <mesh geometry={nodes.Object_54.geometry} material={materials.Light} />
          </group> 

          {/* Row 3 */}
          <group position={[-33.3, 1.94, 3.4]}>
            <mesh geometry={nodes.Object_53.geometry} material={materials.Tiles} />
            <mesh geometry={nodes.Object_54.geometry} material={materials.Light} />
          </group>

          <group position={[-33.3, 1.94, -12.6]}>
            <mesh geometry={nodes.Object_53.geometry} material={materials.Tiles} />
            <mesh geometry={nodes.Object_54.geometry} material={materials.Light} />
          </group>
          <group position={[-33.3, 1.94, -28.6]}>
            <mesh geometry={nodes.Object_53.geometry} material={materials.Tiles} />
            <mesh geometry={nodes.Object_54.geometry} material={materials.Light} />
          </group>

          {/* Front Wall */}
          <group position={[-8, 0.51, -28.4]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_6.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,28]} position={[23.9,1.6,-54.1]} rotation={[-0.001,1.43,0]}/>
            
          </group>
          <group position={[-25.4, 0.51, -28.4]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_6.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,28]} position={[-6.5,1.6,-58.4]} rotation={[-0.001,1.43,0]}/>
          </group>

          {/* Back Wall */}
          <group position={[-26.3, 0.51, 9.5]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_21.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_22.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,60]} position={[-0.8,1.6,6.4]} rotation={[-0.001,1.43,0]}/>  
          </group>
          <group position={[-7.3, 0.51, 9.5]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_21.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_22.geometry} material={materials.Wall} />
          </group>

          {/* Right Side Wall */}
          <group position={[7.97, 0.51, -7.15]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_24.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_25.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,64]} position={[33.4,1.6,-20.8]} rotation={[-0.001,-0.14,0]}/>
          </group>
          <group position={[7.97, 0.51, -26]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_24.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_25.geometry} material={materials.Wall} />
          </group>

          {/* Left Side Wall */}
          <group position={[-27.7, 0.51, -7]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_27.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_28.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,64]} position={[-25.5,1.6,-29.4]} rotation={[-0.001,-0.14,0]}/>
          </group>
          <group position={[-27.7, 0.51, -26]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_27.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_28.geometry} material={materials.Wall} />
          </group>
          
          {/* Box Divider*/}
          <group position={[-2.97, 0.51, -0.08]} rotation={[0, Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_15.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_16.geometry} material={materials.Wall} />
            <Wall args={[3.2,3.1,8.1]} position={[13.33,1.6,-9.3]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[-2.96, 0.51, -1.81]} rotation={[0, Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_36.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_37.geometry} material={materials.Wall} />
          </group>
          <group position={[-0.59, 0.51, -0.95]}>
            <mesh geometry={nodes.Object_39.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_40.geometry} material={materials.Wall} />
          </group>
          <group position={[-5.33, 0.51, -0.96]}>
            <mesh geometry={nodes.Object_42.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_43.geometry} material={materials.Wall} />
          </group>

          {/* Support Beams */}
          <group position={[-5.9, 0.98, 7]}>
            <mesh geometry={nodes.Object_59.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_60.geometry} material={materials.Skirting}/>
            <Wall args={[1.1,3.1,1.3]} position={[6.6,1.6,3.2]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[-0.04, 0.98, 7]}>
            <mesh geometry={nodes.Object_62.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_63.geometry} material={materials.Skirting} />
            <Wall args={[1.1,3.1,1.3]} position={[16.3,1.6,4.6]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[5.3, 0.98, 6.8]}>
            <mesh geometry={nodes.Object_65.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_66.geometry} material={materials.Skirting} />
            <Wall args={[1,3.1,1]} position={[25.1,1.6,5.5]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[2.5, 0.98, -1.2]}>
            <mesh geometry={nodes.Object_68.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_69.geometry} material={materials.Skirting} />
            <Wall args={[1,3.1,1]} position={[22.5,1.6,-8.3]} rotation={[-0.001,1.43,0]}/>
          </group>

          <group position={[-25, 0.98, -1.2]}>
            <mesh geometry={nodes.Object_68.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_69.geometry} material={materials.Skirting} />
            <Wall args={[1,3.1,1]} position={[-23,1.6,-14.8]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[-25, 0.98, 6]}>
            <mesh geometry={nodes.Object_68.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_69.geometry} material={materials.Skirting} />
            <Wall args={[1,3.1,1]} position={[-24.8,1.6,-2.9]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[-21.2, 0.98, -1.2]}>
            <mesh geometry={nodes.Object_68.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_69.geometry} material={materials.Skirting} />
            <Wall args={[1,3.1,1]} position={[-16.8,1.6,-13.9]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[-13.6, 0.98, -2]}>
            <mesh geometry={nodes.Object_68.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_69.geometry} material={materials.Skirting} />
            <Wall args={[1,3.1,1]} position={[-4,1.6,-13.5]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[-21.2, 0.98, 6]}>
            <mesh geometry={nodes.Object_68.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Object_69.geometry} material={materials.Skirting} />
            <Wall args={[1,3.1,1]} position={[-18.5,1.6,-2]} rotation={[-0.001,1.43,0]}/>
          </group>
          

          {/* Rows Back Wall */}
          <group position={[-11.4, 0.51, 8.6]} rotation={[0,3.15,0]}>
            <mesh geometry={nodes.Object_39.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_40.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,2.8]} position={[-2.9,1.6,4.5]} rotation={[-0.001,-0.14,0]}/>
          </group>
          <group position={[-13.7, 0.51, 8.6]} rotation={[0,3.15,0]}>
            <mesh geometry={nodes.Object_39.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_40.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,2.8]} position={[-6.7,1.6,4]} rotation={[-0.001,-0.14,0]}/>
          </group>
          <group position={[-16.5, 0.51, 8.6]} rotation={[0,3.15,0]}>
            <mesh geometry={nodes.Object_39.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_40.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,2.8]} position={[-11.3,1.6,3.3]} rotation={[-0.001,-0.14,0]}/>
          </group>
          <group position={[-16.5, 0.51, 5]}>
            <mesh geometry={nodes.Object_39.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_40.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,2.8]} position={[-10.4,1.6,-2.5]} rotation={[-0.001,-0.14,0]}/>
          </group>
          <group position={[-13.73, 0.51, 5]}>
            <mesh geometry={nodes.Object_39.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_40.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,2.8]} position={[-5.9,1.6,-1.9]} rotation={[-0.001,-0.14,0]}/>
          </group>
          <group position={[-18.5, 0.51, 8.6]} rotation={[0,3.15,0]}>
            <mesh geometry={nodes.Object_39.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_40.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,2.8]} position={[-14.64,1.6,3]} rotation={[-0.001,-0.14,0]}/>
          </group>
          
          {/* Random Walls */}
          <group position={[-6.55, 0.51, -4.87]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_30.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_31.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,23]} position={[16.5,1.6,-15.45]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[5.31, 0.51, -0.16]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_33.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_34.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,16]} position={[26.8,1.6,-6.01]} rotation={[-0.001,-0.14,0]}/> 
          </group>
          <group position={[-6.57, 0.51, 4.6]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_45.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_46.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,15.8]} position={[10.2,1.6,-0.3]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[-8.9, 0.51, -0.15]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_33.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_34.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,16]} position={[3.3,1.6,-9.3]} rotation={[-0.001,-0.14,0]}/> 
          </group>
          <group position={[-4.45, 0.51, 1.91]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_48.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_49.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,15.8]} position={[14.1,1.6,-4.3]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[2.64, 0.51, 7.1]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_12.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_13.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,8]} position={[20.7,1.6,5.4]} rotation={[-0.001,-0.14,0]}/> 
          </group>
          <group position={[-18.5, 0.51, -0.6]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_33.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_34.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,16]} position={[-12.5,1.6,-12.3]} rotation={[-0.001,-0.14,0]}/> 
          </group>
          <group position={[-11.5, 0.51, 3.5]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.Object_12.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_13.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,7.9]} position={[-1.8,1.6,-3.8]} rotation={[-0.001,-0.14,0]}/>
          </group>
          <group position={[-16.1, 0.51, 4.1]} rotation={[0, Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_15.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_16.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,8]} position={[-9.5,1.6,-4]} rotation={[-0.001,1.43,0]}/>
          </group>
          <group position={[-13.88, 0.51, 1.1]} rotation={[0, Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_15.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_16.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,8]} position={[-5.3,1.6,-8.4]} rotation={[-0.001,1.43,0]}/>
          </group>

          <group position={[-27, 0.51, -5.4]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_6.geometry} material={materials.Skirting} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.Wall} />
            <Wall args={[0.3,3.1,29]} position={[-12.2,1.6,-20.35]} rotation={[-0.001,1.43,0]}/>
          </group>

        </group>
      </group>
    </group>
  )
}

useGLTF.preload(Backroom)
