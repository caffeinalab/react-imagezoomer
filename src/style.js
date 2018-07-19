export default {
 imagezoomer: {
   position: 'relative',
   width: '100%',
   height: '100%',
   backgroundSize: 'contain',
   backgroundRepeat: 'no-repeat',
   backgroundPosition: 'center center'
 },
 imagezoomer__inner: {
  position: 'absolute',
  top: '-75px',
  left: '-75px',
  width: '150px',
  height: '150px',
  background: 'white',
  overflow: 'hidden',
  border: '1px solid',
  borderRadius: '50%',
  pointerEvents: 'none'
 },
 imagezoomer__inner__image: {
  position: 'absolute',
  top: '50%',
  left: '50%',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  transformOrigin:' top left',
  pointerEvents: 'none'
 }
}