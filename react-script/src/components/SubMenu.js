import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const SideBarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;

`
const SideBarLabel = styled.span`

`

const SubMenu = (item) => {
    return(
        <>
            <SideBarLink to={item.path}>
                <div>
                    {item.icon}
                    <SideBarLabel>{item.title}</SideBarLabel> 
                </div>
            </SideBarLink>
        </>
    );
}

export default SubMenu