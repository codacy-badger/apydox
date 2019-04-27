import { RSAA } from 'redux-api-middleware'
import { COMMIT_CHANGES } from '../actions/editor/types'

const githubAPIRequestActionTypes: Array<string> = [COMMIT_CHANGES]

const isGithubAPICall = (rsaa: any) => {
  const type =
    typeof rsaa.types[0] === 'object' ? rsaa.types[0].type : rsaa.types[0]
  return githubAPIRequestActionTypes.includes(type)
}

export default () => (next: any) => (action: any) => {
  const rsaa = action[RSAA]

  // Check if this action is a redux-api-middleware action.
  if (rsaa && isGithubAPICall(rsaa)) {
    rsaa.endpoint = `https://api.github.com/repos/${
      process.env.REACT_APP_API_DOCS_REPO_OWNER
    }/${process.env.REACT_APP_API_DOCS_REPO}${rsaa.endpoint}`
    // Inject the Authorization header from sessionStorage.

    rsaa.headers = Object.assign({}, rsaa.headers, {
      Authorization: `Bearer ${sessionStorage.getItem('madswagger-gh-token') ||
        ''}`,
    })
    console.log(rsaa)
  }

  // Pass the FSA to the next action.
  return next(action)
}