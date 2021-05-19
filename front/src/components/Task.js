import propTypes from 'prop-types'
import Button from './Button'

const Task = ({title,body}) => {

    return (
        <div>

            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                </div>
            <Button classname={'btn btn-success btn-block'}/>
            <Button classname={'btn btn-danger btn-block'}/>
            </div> 
        </div>
    )
}
Task.defaultProps = {
    title : 'hello',
    body: 'this is body'
}

Task.propTypes = {
    title : propTypes.string.isRequired,
    body : propTypes.string.isRequired,
}

export default Task