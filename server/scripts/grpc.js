const path = require('path');
const shell = require('shelljs');
const rimraf = require('rimraf')

const NODE_BIN_DIR = path.resolve(__dirname, '..', 'node_modules', '.bin')

const protos = [
  {
    dir: path.resolve(__dirname, '..', 'src', 'grpc', 'protos', 'user.proto'),
    out_dir: path.resolve(__dirname, '..', 'src', 'grpc', 'types', 'user')
  }
]

protos.forEach(proto => {
  rimraf(proto.out_dir, () => {})
  
  const PROTO_SCRIPT = [
    `proto-loader-gen-types`,
    '--longs=String',
    '--enums=String',
    '--defaults',
    '--oneofs',
    '--grpcLib=@grpc/grpc-js',
    `--outDir=${proto.out_dir}`,
    proto.dir
  ].join(' ')
  
  shell.exec(`cd ${NODE_BIN_DIR} && ${PROTO_SCRIPT}`, () => console.log('OK!'));
})
