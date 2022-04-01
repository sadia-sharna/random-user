import React from 'react';


export function TextInput({ icon, children, ...rest }: any) {
  return <div className="input-group">
    <span className="input-group-text" id="addon-wrapping">{icon}</span>
    <input {...rest} />
    {children}
  </div>;
}
