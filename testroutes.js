import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Route, Switch, useHistory, useRouteMatch, useLocation } from 'react-router'
import Box from '@material-ui/core/Box'
import { useDispatch } from 'react-redux';
import Loader from '../../components/utilitiies/Loader'
import TabsContainer from '../../components/utilitiies/TabsContainer'



const Testing1 = lazy(() => import("../../containers/test/testing1"));
const Testing2 = lazy(() => import("../../containers/test/testing2"));
const Testing3 = lazy(() => import("../../containers/test/testing3"));

const menuItems = [
    {
        key: 0,
        name: 'testing1',
        path: '/testing1'
    },
    {
        key: 1,
        name: 'testing2',
        path: '/testing2'
    },
    {
        key: 2,
        name: 'testing3',
        path: '/testing3'
    },
]
export default function PostRoutes() {
    const { path } = useRouteMatch();
    const history = useHistory();
    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(1);
    const dispatch = useDispatch();


    

    useEffect(() => {
        if(location?.pathname === '/admin/test/testing1') {
            setSelectedTab(0);
        } else if(location?.pathname === '/admin/test/testing2') {
            setSelectedTab(1);
        } else if(location?.pathname === '/admin/test/testing3') {
            setSelectedTab(2);
        } 
    },[location]);

    const handleChange = (event, newValue) => {  
        console.log(newValue);   
        console.log((menuItems[newValue].path));
        history.push(`${path}${menuItems[newValue]?.path}`)
        setSelectedTab(newValue);
    }


    return (
        <Box style={{ width:'80%', maxWidth:'1150px' }}>
      <TabsContainer
        list={menuItems}
        selected={selectedTab}
        onChange={handleChange}
      />
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route path={`${path}/testing1`} component={Testing1} />
                    <Route path={`${path}/testing2`} component={Testing2} />
                    <Route path={`${path}/testing3`} component={Testing3} />
                    
                </Switch>
            </Suspense>
        
        </Box>
    )
}
