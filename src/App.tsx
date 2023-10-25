import { Engine, Model } from "react-babylonjs";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { PhysicsShapeType } from "@babylonjs/core/Physics/v2/IPhysicsEnginePlugin";

import "./App.css";
import { BjsScene } from "./BjsScene";
import { Suspense } from "react";

const DEG2RAD = Math.PI / 180;

function App() {

  useEffect(() => {
    const animation = new Animation('animation', 'position.y', 60, 0, 1)
    animation.setKeys(keys)
    const animatable = scene!.beginDirectAnimation(
      group,
      animations,
      0,
      120,
      true
    )

  }, []);

  return (
    <div id="wrap">
      <h2 style={{ flex: 0, margin: "0.5rem" }}>Menu</h2>
      <div style={{ flex: 1 }}>
        <Engine
          antialias
          adaptToDeviceRatio
          engineOptions={{
            deterministicLockstep: true,
            lockstepMaxSteps: 4,
            timeStep: 1 / 60,
          }}
        >
          <BjsScene>
            <arcRotateCamera
              name="camera1"
              alpha={20 * DEG2RAD}
              beta={60 * DEG2RAD}
              radius={8}
              target={Vector3.Zero()}
            />

            <hemisphericLight
              name="light1"
              intensity={0.7}
              direction={new Vector3(0, 1, 0)}
            />
            <ground name="ground" width={6} height={6}>
              <physicsAggregate
                type={PhysicsShapeType.BOX}
                _options={{ mass: 0, restitution: 0.9 }}
              />
            </ground>
            <box
              name="box"
              size={1}
              position={new Vector3(0, 5, 0)}
              rotation={Vector3.Zero()}
            >
              <physicsAggregate
                type={PhysicsShapeType.BOX}
                _options={{ mass: 1, restitution: 0.9 }}
              />
            </box>
            <Suspense>
              <Model
                name="chicken"
                rootUrl="/models/"
                sceneFilename="chicken.glb"
                position={new Vector3(0, 0, 2)}
              />
            </Suspense>
          </BjsScene>
        </Engine>
      </div>
    </div>
  );
}

export default App;
