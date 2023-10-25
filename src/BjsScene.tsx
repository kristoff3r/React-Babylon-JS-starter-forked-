import "@babylonjs/core/Animations/animatable";
import "@babylonjs/core/Physics/physicsEngineComponent";
import "@babylonjs/loaders/glTF";

import { Scene } from "react-babylonjs";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { PropsWithChildren, useEffect, useState } from "react";

import { HavokPlugin } from "@babylonjs/core/Physics/v2/Plugins/havokPlugin";
import HavokPhysics, { HavokPhysicsWithBindings } from "@babylonjs/havok";
import { setupInspector } from "./inspector";

interface BjsSceneProps {
  gravityVector?: Vector3;
}

export function BjsScene(props: PropsWithChildren<BjsSceneProps>) {
  const [HK, setHK] = useState<HavokPhysicsWithBindings>();
  useEffect(() => {
    (async () => {
      setHK(await HavokPhysics());
    })();
  }, []);

  if (!HK) {
    return null;
  }
  return (
    <Scene
      enablePhysics={[props.gravityVector ?? null, new HavokPlugin(false, HK)]}
      onSceneMount={(scnEvt) => setupInspector(scnEvt.scene)}
    >
      {props.children}
    </Scene>
  );
}
