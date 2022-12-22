import React from 'react'
import StudentNavbar from '../components/dashboard/dashpages/StudentNavbar'
import BottomBar from '../components/download/downloadcomponents/BottomBar'
import Quiz from '../components/quizcomponents/Quiz'
import { Box } from '@mui/system'

function TakeQuiz() {
  return (
    <>
      <StudentNavbar />
      <Box postion ="fixed"
      sx={{paddingLeft: 65, paddingTop: 10, height: 650, width: 1000 }}>
        <Quiz/>
      </Box>
      <BottomBar />
    </>
  )
}

export default TakeQuiz
