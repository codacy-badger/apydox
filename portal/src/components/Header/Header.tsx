import React from 'react'
import { withRouter, matchPath, RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'

import {
  StyledHeader,
  ButtonLink,
  DashboardLink,
  AddGroupWrapper,
} from './header.styles'
import CommitPanel from 'components/CommitPanel'
import IconButton from 'components/IconButton'
import logo from 'assets/logo.svg'
import content from 'content.json'
import InlineAddField from 'components/InlineAddField'
import { EntitiesState } from 'appredux/reducers/entities'

type HeaderProps = RouteComponentProps<any> & {
  isLoading: boolean
  isLoggedIn: boolean
  entities: EntitiesState
  addGroup: (groupName: string) => void
  logout: () => void
}

const Header: React.FunctionComponent<HeaderProps> = ({
  isLoading,
  isLoggedIn,
  entities,
  addGroup,
  logout,
  history,
}): React.ReactElement => {
  const { location } = history
  const editorMatch = matchPath<any>(location.pathname, {
    path: '/edit/:service',
  })

  return (
    <StyledHeader>
      <Link to="/">
        <img src={content.global.logo || logo} height="40" alt="Logo" />
      </Link>
      {!isLoading && isLoggedIn && (
        <ButtonLink colour="white" onClick={logout}>
          logout
        </ButtonLink>
      )}
      {editorMatch && !!editorMatch.params.service && (
        <>
          <DashboardLink to="/">
            <IconButton
              onClick={(): void => {}}
              iconClassName="fas fa-home"
              colour="white"
              iconFontSize="13pt"
            />
            {'dashboard'}
          </DashboardLink>
          <CommitPanel />
        </>
      )}
      {(!editorMatch || !editorMatch.params.service) && isLoggedIn && (
        <AddGroupWrapper>
          <InlineAddField
            entityName={'group'}
            iconColour={'white'}
            alignment={'left'}
            onSave={addGroup}
            finished={!entities.isAddingGroup}
          />
        </AddGroupWrapper>
      )}
    </StyledHeader>
  )
}

export default withRouter(Header)
