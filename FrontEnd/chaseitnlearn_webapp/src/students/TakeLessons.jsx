import React, { Component } from 'react';

class TakeLessons extends Component {
    constructor(props){
        super(props)
        this.state ={
            lessons: []
        }
    }

    componentDidMount(){
        LessonService.getLessons().then((res) =>{
        this.setState({lessons: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2>List of Lesson within a Course</h2>
                    <div className='row'>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>LESSONNAME</th>
                                    <th>AUTHOR</th>
                                    <th>CHAPTER</th>
                                    <th>CONTENT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.lessons.map(
                                        lesson =>
                                    <tr key = {lesson.id}>
                                        <td>{lesson.id}</td>
                                        <td>{lesson.lessonname}</td>
                                        <td>{lesson.author}</td>
                                        <td>{lesson.chapter}</td>
                                        <td>{lesson.content}</td>
                                        <td></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>           
            </div>
        );
    }
}

export default TakeLessons;
