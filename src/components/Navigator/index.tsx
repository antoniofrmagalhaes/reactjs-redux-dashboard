import React from 'react'

import GroupLink from '../GroupLink'
import Link from '../CustomLink'

import { Accordion } from './styles'

export interface IPath {
  id: number
  to: string
  label: string
}

export interface ILinkPaths {
  key: number
  label: string
  to: string
  subpaths?: IPath[]
}

interface INavigatorProps {
  config: ILinkPaths[]
  handleCloseNav: () => void
}

const Navigator: React.FC<INavigatorProps> = ({ config, handleCloseNav }) => {
  return (
    <Accordion allowToggle>
      {config.map(({ key, label, to, subpaths }) => {
        if (subpaths) {
          return (
            <GroupLink
              key={key}
              label={label}
              subpaths={subpaths}
              handleCloseNav={handleCloseNav}
            />
          )
        }
        return <Link key={key} label={label} to={to} onClick={handleCloseNav} />
      })}
    </Accordion>
  )
}

export default Navigator
