import React, {PropsWithChildren} from "react";
import styled from "styled-components/native";

const DefaultCell = styled.View`
  border-radius: 16px;
  background-color: white;
  padding: 16px 30px;
  margin: 5px 10px;
`

type DefaultCellProps = {}

const CukiCell = (props?: PropsWithChildren<DefaultCellProps>) => {
    return (
        <DefaultCell>
            {props?.children}
        </DefaultCell>
    )
}

export default CukiCell
