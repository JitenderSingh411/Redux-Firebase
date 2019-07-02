import React , {Component} from 'react';

class CreateProject extends Component{

    state = {
        id:'',
        title:'',
        content:''
    }

    handleChange = (e) =>
    {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) =>{
          e.preventDefault();
          console.log(this.state);
    }

    render()
    {
        return(
                   <div className="container">
                       <form onSubmit={this.handleSubmit}>
                           <h5>Create Project</h5>
                           <div className="input-field">
                               <label htmlFor="title">Title</label>
                               <input type="text" id = "title" onChange={this.handleChange}/>
                           </div>
                           <div className="input-field">
                               <label htmlFor="content">Content</label>
                               <textArea className="materialize-textarea" type="text" id = "content" onChange={this.handleChange}/>
                           </div>
                           <div className="input-field">
                              <button className="btn green darken-2">Sign In</button>
                           </div>
                       </form>
                   </div>             
        )
    }
}

export default CreateProject