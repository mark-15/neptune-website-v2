import styled from 'styled-components'

import { colors } from '../../../styles/colors'
import { utils } from '../../../styles/utils'
import { HtmlContent } from '../Content'
import { TableOfContents } from '../TableOfContents'
import { Breadcrumbs } from '../Breadcrumbs'
import { Shareit } from '../Shareit'

export const DetailComponent = ({ title, intro, html, breadcrumbs, headers, sharelinks = true }) => {
  return (
    <MainWrapper>
      <Sidebar>
        <TableOfContents title={title} headers={headers} />
      </Sidebar>

      <ContentWrapper>
        {breadcrumbs && <Breadcrumbs className='breadcrumb-wrapper' crumbs={breadcrumbs} />}

        <HtmlContent content={html} />

        {sharelinks && <Shareit title={title} intro={(intro || '').substr(0, 100)} />}
      </ContentWrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  ${utils.fullWidthContainer};
  padding-left: 86px;
  padding-right: 86px;
  word-break: break-word;

  padding-top: 56px;
  padding-bottom: 96px;
  
  
  display: grid;
  gap: 64px;
  grid-template-columns: 4fr 9fr;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    padding-bottom: 56px;
    
    ${utils.fullWidthContainer};
  }
`

const Sidebar = styled.div`
  border-right: 1px solid ${props => props.theme.isLightMode ? colors.gray[200] : colors.gray[700]};

  @media (max-width: 1023px) {
    display: none;
  }
`

const ContentWrapper = styled.div` 
  overflow: hidden;

  .breadcrumb-wrapper {
    margin-bottom: 32px;
  }
`
