<template>
  <div>
    <Container :cont="contConfig">
      <!-- main -->
      <div slot="main">
        <!-- 常用图标 -->
        <el-row>
          three
        </el-row>
        
        <div ref="threeDom">

        </div>
      </div>
    </Container>
    <script type="x-shader/x-vertex" id="vertexShader">
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
    </script>
    <script type="x-shader/x-fragment" id="fragmentShader">
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize( vWorldPosition + offset ).y;
        gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max( h, 0.0 ), exponent ), 0.0 ) ), 1.0 );
      }
    </script>
  </div>
</template>

<script>
import Container from "../../../components/container/index.vue";

import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;

let container, stats;
let camera, scene, renderer;

export default {
  name: "icons",
  components: {
    Container,
  },
  data() {
    return {
      contConfig: {
        aside: false,
      },
      
    };
  },
  watch: {},
  mounted() {
    this.init();
		this.animate();

    this.$refs.threeDom.innerWidth
  },
  methods: {
    async init(){
      container = document.createElement( 'div' );
      this.$refs.threeDom.appendChild( container );

      // CAMERA
      camera = new THREE.PerspectiveCamera( 40, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
      camera.position.set( 700, 200, - 500 );

      // SCENE
      scene = new THREE.Scene();

      // LIGHTS
      const light = new THREE.DirectionalLight( 0xaabbff, 0.3 );
      light.position.x = 300;
      light.position.y = 250;
      light.position.z = - 500;
      scene.add( light );

      // SKYDOME
      const vertexShader = document.getElementById( 'vertexShader' ).textContent;
      const fragmentShader = document.getElementById( 'fragmentShader' ).textContent;
      const uniforms = {
        topColor: { value: new THREE.Color( 0x0077ff ) },
        bottomColor: { value: new THREE.Color( 0xffffff ) },
        offset: { value: 400 },
        exponent: { value: 0.6 }
      };
      uniforms.topColor.value.copy( light.color );

      const skyGeo = new THREE.SphereGeometry( 4000, 32, 15 );
      const skyMat = new THREE.ShaderMaterial( {
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        side: THREE.BackSide
      } );

      const sky = new THREE.Mesh( skyGeo, skyMat );
      scene.add( sky );

      // RENDERER
      renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
      container.appendChild( renderer.domElement );
      renderer.outputEncoding = THREE.sRGBEncoding;

      // CONTROLS
      const controls = new OrbitControls( camera, renderer.domElement );
      controls.maxPolarAngle = 0.9 * Math.PI / 2;
      controls.enableZoom = false;

      // STATS
      stats = new Stats();
      container.appendChild( stats.dom );

      // MODEL
      const loader = new THREE.ObjectLoader();
      const object = await loader.loadAsync( 'lightmap/lightmap.json' );
      scene.add( object );
      window.addEventListener( 'resize', this.onWindowResize );
    },
    onWindowResize() {
      camera.aspect = this.$refs.threeDom.innerWidth / this.$refs.threeDom.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( this.$refs.threeDom.innerWidth, this.$refs.threeDom.innerHeight );
    },
    animate() {
      requestAnimationFrame( this.animate );
      renderer.render( scene, camera );
      stats.update();
    }
  },
};
</script>

<style lang="scss" scoped>

</style>