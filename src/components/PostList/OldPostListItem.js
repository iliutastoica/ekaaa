import React from 'react'
import { Link } from 'gatsby'
import Flag from '../Flag/Flag'
import TagList from '../TagList'
import siteConfig from '../../../data/siteConfig'
import styled from 'styled-components'

const Post = styled.article`
  border-bottom: 1px solid rgba(214, 209, 230, 0.5);
  padding-bottom: 1.25rem;
`

const ReadPost = styled(Link)`
  display: block;
  font-size: 0.75rem;
  margin-top: 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 2;

  &:hover {
    background-color: rgba(32, 35, 42, 0.85);
    border-radius: 0.25rem;
    color: #fff;
  }
`

const PostDate = styled.time`
  color: #7f7e7e;
  &:before {
    content: '🗓';
    margin-right: 0.2rem;
  }
`

const PostHeader = styled.header`
  padding: 1em 0;
`

const Excerpt = styled.p`
  line-height: 1.45;
  padding-bottom: 0.5em;
`

const PostTitleLink = styled(Link)`
  &:hover {
    border-bottom: 1px dotted rgba(34, 34, 34, 0.8);
  }
`

class OldPostListItem extends React.Component {
  render() {
    const {
      title,
      excerpt,
      fullSlug,
      date,
      language,
      tags,
    } = this.props

    return (
      <Post>
        <PostHeader>
          <h2>
            <PostTitleLink to={fullSlug}>
              {siteConfig.multilangPosts && <Flag language={language} />}
              {title}
            </PostTitleLink>
          </h2>
        </PostHeader>
        <section>
          <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
        </section>
        <footer>
          {tags && (<TagList tags={tags} icon={true} />)}
          <PostDate>{date}</PostDate>
          <ReadPost to={fullSlug}>Read post ›</ReadPost>
        </footer>
      </Post>
    )
  }
}
export default OldPostListItem
