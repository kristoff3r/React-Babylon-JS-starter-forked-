import { Engine } from "react-babylonjs";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { PhysicsImpostor } from "@babylonjs/core/Physics/physicsImpostor";

import "./App.css";
import { BjsScene } from "./BjsScene";

function App() {
  return (
    <div id="wrap">
      <h2 style={{ flex: 0, margin: "0.5rem" }}>Menu</h2>
      <div style={{ flex: 1 }}>
        <Engine antialias adaptToDeviceRatio canvasId="babylon-canvas">
          <BjsScene>
            <freeCamera
              name="camera1"
              position={new Vector3(0, 5, -10)}
              setTarget={[Vector3.Zero()]}
            />

            <hemisphericLight
              name="light1"
              intensity={0.7}
              direction={new Vector3(0, 1, 0)}
            />
            <ground name="ground" width={6} height={6}>
              <physicsImpostor
                type={PhysicsImpostor.BoxImpostor}
                _options={{ mass: 0, restitution: 0.9 }}
              />
            </ground>
            <box
              name="box"
              size={2}
              position={new Vector3(0, 2, 0)}
              rotation={Vector3.Zero()}
            >
              <physicsImpostor
                type={PhysicsImpostor.BoxImpostor}
                _options={{ mass: 1, restitution: 0.9 }}
              />
            </box>
          </BjsScene>
        </Engine>
      </div>
    </div>
  );
}

export default App;
