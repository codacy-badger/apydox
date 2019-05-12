export const loadServiceDefinition = jest.fn(
  (): Promise<any[]> =>
    Promise.resolve([
      {
        content: '',
        sha: '',
      },
    ])
)

export const apiDefs = jest.fn(
  (): Promise<any[]> =>
    Promise.resolve([
      {
        name: 'Core Services',
        id: 'core-services',
        definitions: [
          { path: 'core-services/Service1.yaml', type: 'blob' },
          { path: 'core-services/Service2.yaml', type: 'blob' },
        ],
      },
      {
        name: 'Integration Services',
        id: 'integration-services',
        definitions: [
          {
            path: 'integration-services/IntegrationService1.yaml',
            type: 'blob',
          },
          {
            path: 'integration-services/IntegrationService2.yaml',
            type: 'blob',
          },
          {
            path: 'integration-services/IntegrationService3.yaml',
            type: 'blob',
          },
        ],
      },
    ])
)
