// import TextureBackground from '../../assets/texturebackground.avif'
// import WallTexture from '../../assets/walltexture.jpg'
import GrassTexture from '../../assets/grass.jpg'
export default function Footer() {
  return (
    <>
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{ backgroundImage: `url(${GrassTexture.src})` }}
      ></div>
      <div>
        <div className="max-w-full max-h-full my-96">Footer</div>
        <div className="max-w-full max-h-full my-96">Footer</div>
        <div className="max-w-full max-h-full my-96">Footer</div>
      </div>
    </>
  )
}
