export default function createRoute (record, path) {
  // 存储跟当前path相关的所有的record
  const matched = []
  while (record) {
    matched.unshift(record)
    record = record.parentRecord
  }
  return {
    matched,
    path
  }
}
