import styles from '../../styles/Blogs.module.css'
import Card from './Card/Card'

function Blogs(props) {
    
    let blogs = props.blogs
    
    return (
        <div className={styles.blogs} id="blogs">
            <h1>My blogs</h1>
            <p>I love to write technology-based articles. All of my blogs are available on <a href="https://medium.com/@v599568" target="_blank" without rel="noreferrer" style={{color: '#c5c3c3'}} >Medium.com | Vaibhav C</a>
                <br/>These are some of the blogs that I have written.
            </p>
            <div className={styles.blogs_section}>
                {blogs && blogs.map((blog,index)=>
                <Card
                key={index}
                name={blog.title}
                image={blog.thumbnail}
                link={blog.link}
                date = {blog.pubDate}
                />)}
            </div>
        </div>
    )
}

export default Blogs
