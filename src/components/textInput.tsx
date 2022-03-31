import React from 'react';


export function TextInput({ icon, children, ...rest }: any) {
  return <div className="input-group ">
    <input {...rest} />
    {children}
  </div>;
}
