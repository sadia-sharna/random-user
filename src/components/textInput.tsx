import React from 'react';


export function TextInput({ icon, children, ...rest }: any) {
  return <div className="input-group mt-3">
    <input {...rest} />
    {children}
  </div>;
}
