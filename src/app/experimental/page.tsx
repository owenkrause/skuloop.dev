'use client'

import { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default function Experimental() {

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
    const renderer = new THREE.WebGLRenderer()
    const controls = new OrbitControls( camera, renderer.domElement );
    camera.position.z = 5
    controls.update()
    renderer.setSize( window.innerWidth, window.innerHeight )
    document.body.appendChild( renderer.domElement )


    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 10000
    const posArray = new Float32Array(particlesCount * 3)
    for(let i = 0; i < (particlesCount * 3)-3; i+=3 ) {
      const radius = 2
      const distance = radius * Math.cbrt(Math.random())
      const phi = THREE.MathUtils.randFloat(0,360);
      const costheta = THREE.MathUtils.randFloat(-radius,radius)
      const theta = Math.acos(costheta)
      posArray[i] = distance * Math.sin(theta) * Math.cos(phi)
      posArray[i+1] = distance * Math.sin(theta) * Math.sin(phi) 
      posArray[i+2] = distance * Math.cos(theta) 
    }
    
    particlesGeometry.setAttribute( 'position', new THREE.BufferAttribute(posArray, 3) )

    const material = new THREE.PointsMaterial({
      size: .005
    })

    const particlesMesh = new THREE.Points( particlesGeometry, material )
    scene.add( particlesMesh )


    function animate() {
      requestAnimationFrame( animate );
	    particlesMesh.rotation.y -= 0.005;
      controls.update()
      renderer.render( scene, camera );
    }
    animate()
  })
}
