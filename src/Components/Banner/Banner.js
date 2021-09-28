import React, {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import Model from '../../Three/Model/Model';
import LoadingModel from '../../Three/LoadingModel/LoadingModel';
import laptop from '../../assets/models/laptop.glb';
import './Banner.css';
import Lighting from '../../Three/Lighting/Lighting';

export default function Banner() {
    return (
        <div className="Banner">
            <div className="Title">
                <h1>Patrick Lang Coding Portfolio</h1>
            </div>
                <Canvas 
                    shadowMap
                    camera={{
                        position:[0, 0, 30],
                        fov: 22
                    }}    
                >
                    <Lighting />
                    <spotLight intensity={1} position={[0, 10, 0]} color='yellow' castShadow />
                    <Suspense fallback={<LoadingModel />}>
                        <Model modelPath={laptop} scale={15}
                        position={[0, -4, 0]} />
                    </Suspense>
                    <fog attach="fog" args={["black", 30, 100]} />
                    <mesh visible position={[0, -4.5, 0]} rotation={[ -Math.PI / 2, 0, 0]}
                        receiveShadow>
                        <planeBufferGeometry  attach="geometry" args={[200, 20]} />
                        <meshStandardMaterial
                            attach="material"
                            color="darkgrey"
                        />
                    </mesh>
                </Canvas>
        </div>
    )
}
