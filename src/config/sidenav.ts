export default [
  {
    key: 7,
    label: 'Home',
    to: '/'
  },
  {
    key: 14,
    label: 'New Incident',
    to: '/incident/new'
  },
  {
    key: 66,
    label: 'New Request',
    to: '/request/new'
  },
  {
    key: 12,
    label: 'New Informative',
    to: '/informative/new'
  },
  {
    key: 2,
    label: 'SLAs',
    to: '',
    subpaths: [
      {
        id: 1,
        to: '/sla/myworks',
        label: 'My Works'
      },
      {
        id: 2,
        to: '/sla/mygroupsworks',
        label: "My Group's Works"
      }
    ]
  },
  {
    key: 3,
    label: 'Requests',
    to: '',
    subpaths: [
      {
        id: 1,
        to: '/requests/open',
        label: 'Open Requests'
      },
      {
        id: 2,
        to: '/requests/all',
        label: 'All'
      }
    ]
  },
  {
    key: 4,
    label: 'Incidents',
    to: '',
    subpaths: [
      {
        id: 1,
        to: '/',
        label: 'Open Incidents'
      },
      {
        id: 2,
        to: '/',
        label: 'All'
      }
    ]
  },
  {
    key: 10,
    label: 'Reports',
    to: '/reports'
  },
  {
    key: 1,
    label: '@AMERICAS L1 IT RISK TEAM',
    to: '/queue',
    subpaths: [
      {
        id: 1,
        to: '/incidents/assigned',
        label: 'Assigned to me'
      },
      {
        id: 2,
        to: '/incidents/open',
        label: 'Open'
      },
      {
        id: 3,
        to: '/incidents/open/unassigned',
        label: 'Open - unassigned'
      },
      {
        id: 4,
        to: '/incidents/resolved',
        label: 'Resolved'
      },
      {
        id: 5,
        to: '/incidents/all',
        label: 'All'
      }
    ]
  }
]
