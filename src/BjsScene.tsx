import "@babylonjs/core/Animations/animatable";
import "@babylonjs/core/Physics/physicsEngineComponent";
import "@babylonjs/loaders/glTF";

import { Scene } from "react-babylonjs";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { PropsWithChildren } from "react";
import { CannonJSPlugin } from "@babylonjs/core/Physics/Plugins/cannonJSPlugin";
import * as CANNON from "cannon";

interface BjsSceneProps {
  gravityVector?: Vector3;
}

export function BjsScene(props: PropsWithChildren<BjsSceneProps>) {
  return (
    <Scene
      enablePhysics={[
        props.gravityVector ?? null,
        new CannonJSPlugin(undefined, undefined, CANNON),
      ]}
    >
      {props.children}
    </Scene>
  );
}
