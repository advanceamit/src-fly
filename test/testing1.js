import React, { useEffect, useState,useContext } from 'react'
import { useDispatch, useSelector,u } from 'react-redux'
import ReactGA from 'react-ga';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import moment from 'moment-mini'


import * as postActions from '../../actions/postAction'
import MainContainer from '../../components/utilitiies/MainContainer'
import Pagination from '../../components/utilitiies/Pagination'
import {StyledTableCell,useStyles,} from '../../components/utilitiies/StyledTable'
import PublishedPostItem from '../../components/post/PublishedPostItem'
import { COLORS } from '../../constants/color'
import { AlertNotificationContext } from '../../elements/alert-notfication/alertState';



const testing1 = () => {
  
  

  return (
   <>
   
   <MainContainer>
    
     
       <TableContainer
        className='published-posts-table'
        style={{
          borderRadius: '10px',
          border: '1px solid #EDEDED',
          background: '#FFFF',
        }}
      >
        <Table  aria-label='customized table'>
          <TableHead>
            <TableRow>
              {/* <StyledTableCell style={{width: 50,}}></StyledTableCell> */}
              <StyledTableCell style={{ width: '20%' }}>Post Contents</StyledTableCell>
              <StyledTableCell>Page</StyledTableCell>
              <StyledTableCell>Contributor</StyledTableCell>
              <StyledTableCell>Post Type</StyledTableCell>
              <StyledTableCell>Date posted</StyledTableCell>
              <StyledTableCell>Likes</StyledTableCell>
              <StyledTableCell>Comments</StyledTableCell>
              {/* <StyledTableCell></StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {pageLoader ? (
              <CircularProgress
                size={32}
                color='primary'
                className='loaderClass'
              />
            ) : (
              publishedPosts?.results &&
              publishedPosts?.results?.map((row, index) => {
                return (  
                  <>
                  <PublishedPostItem
                    row={row}
                    key={row.id}
                    id={row.id}
                    index={index}
                    didYouKnow={didYouKnow}
                    setDidYouKnow={setDidYouKnow}
                  />
                  </>
                )
              })
            )} */}
          </TableBody>
        </Table>
      </TableContainer> 
      <Pagination
            limit={1}
            totalResults={4}
            totalPages={2}
            currentPage={2}
            pagingCounter={2}
            onClickPrevious={1}
            onClickNext={2}
            
          
          />
    </MainContainer>
   </>
  )
}

export default testing1