import { OrbitControls, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


function Textrot() {
  return (
    <Canvas>
        <ambientLight/>
        <Text
          position = {[0,0,0]}
          fontSize = {2}
          font='./fonts/Poppins-Bold.ttf'
          color="#616161"
          anchorX="center"
          anchorY="middle"
          depth={4} 
          curveSegments={12}
          bevelEnabled
          bevelSize={0.05}
          bevelThickness={0.1}
          height={0.3}
        >
            Coding Is An Emotion
        </Text>
      <meshDepthMaterial/>
      <OrbitControls/>
    </Canvas>
  )
}
export default Textrot

