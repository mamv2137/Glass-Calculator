import React from 'react'

interface Props {
    
}

export const Tab: React.FC<Props> = (props) => {
    return (
      <span className="">
        {props.children}
      </span>
    );
}
