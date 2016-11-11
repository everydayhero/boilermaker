const isFetched = ({ status } = {}) => status === 'fetched'

export default (resource = {}, fetcher) => (
  isFetched(resource)
    ? Promise.resolve()
    : fetcher()
)
