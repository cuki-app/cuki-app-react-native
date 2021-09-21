import React, {PropsWithChildren} from "react";
import styled from "styled-components/native";

const DefaultCell = styled.View`
  border-radius: 16px;
  background-color: white;
  padding: 16px 30px;
  margin: 5px 10px;
`

const TransparentCell = styled.View`
  margin: 5px 10px;
  padding: 16px 30px;
  align-items: center;
`

type DefaultCellProps = {
    type?: string,
    style?: any
}

const CukiCell = (props?: PropsWithChildren<DefaultCellProps>) => {
    return props?.type === 'transparent' ? (
        <TransparentCell style={{...props?.style}}>
            {props?.children}
        </TransparentCell>
    ) : (
        <DefaultCell style={{...props?.style}}>
            {props?.children}
        </DefaultCell>
    )
}

export default CukiCell
