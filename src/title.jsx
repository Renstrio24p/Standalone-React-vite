import React from 'react'

export default function Title(){
 React.useEffect(() => {
    document.title = 'Standalone React + Vite';
}, []);
}
