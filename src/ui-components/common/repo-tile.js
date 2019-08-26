import React from 'react'
import './style.css'

const RepoTile = ({ repo }) => (
    <div className='repo-tile'>
        <img className='repo-image' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='git-logo' />
        <div className='repo-title'>{repo.name}</div>
        <div className='repo-count'>
            <div className='count star-count'>&#9733;Stars {repo.stargazers_count}</div>
            <div className='count fork-count'>
                <img src='https://img.icons8.com/material-rounded/24/000000/code-fork.png' alt='git-logo' />
                Fork{repo.forks_count}
            </div>
            <div className='count issue-count'>&#9843;Open Issues {repo.open_issues_count}</div>
        </div>
        <div className='repo-desc'>{repo.description}</div>
        <div className='view-repo-wrap'>
            <a className='view-repo' href={repo.url} target='__blank'>VIEW PROFILE</a>
        </div>
    </div>
)

export default RepoTile

