import Loadable from 'react-loadable';

export default function LoadableHoc(opts) {
  return Loadable({
    ...opts,
    loading: () => null,
    delay: 200,
    timeout: 10,
  });
}
