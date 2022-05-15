import CSS from 'csstype';

const divStyles: CSS.Properties = {
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  position: 'absolute',
  left: 0,
  padding: '0.5rem',
  fontFamily: 'sans-serif',
  fontSize: '1.5rem',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
};



export default function Layout(props: any) {
  return (
    <><div style={divStyles}>
          {props.children}
    </div>
    </>
  );
}