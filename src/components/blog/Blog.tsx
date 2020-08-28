import React from 'react'
import styled from 'styled-components'
import * as S from '../../styles/shared'
import blogData from '../../data/blog.json'
import { BlogCard } from './BlogCard'

const StyledBlogList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Blog: React.FC = () => {
  const blogList = blogData.map(blog => (
    <BlogCard key={blog.title} blog={blog} />
  ))
  return (
    <S.StyledContainer>
      <S.StyledSectionTitle data-aos="fade-up">
        Recent Blogs
      </S.StyledSectionTitle>
      <S.StyledSectionSubtitle data-aos="fade-up">
        I am not a good writer, and I just want to share my thoughts.
      </S.StyledSectionSubtitle>

      <StyledBlogList>{blogList}</StyledBlogList>
    </S.StyledContainer>
  )
}
