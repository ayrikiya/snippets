/*
 * @Author: 王荣
 * @Date: 2022-06-09 15:30:29
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-09 15:30:30
 * @Description: 填写简介
 */

export function convertChildrenToData(nodes: React.ReactNode, group = {}): Option[] {
  let nodeOptions: Option[] = [];
  React.Children.forEach(nodes, (node: React.ReactElement & { type: { isSelectOptGroup?: boolean }; props: OptionProps }) => {
    if (!React.isValidElement(node)) return;
    const {
      type: { isSelectOptGroup },
      props: { children, label, value },
    } = node;
    if (!isSelectOptGroup) { // option
      nodeOptions.push(convertNodeToOption(node, group));
    } else { // Group
      nodeOptions = concat(nodeOptions, convertChildrenToData(children, { groupLabel: label, groupValue: value }));
    }
  });
  return nodeOptions;
}

// ReactNode To Options
export function convertNodeToOption(node: React.ReactElement, group: group): Option {
  const {
    props: { value, children, ...restProps },
  } = node as React.ReactElement & { props: OptionProps };
  const { groupValue, groupLabel } = group;
  if (groupLabel && groupLabel) {
    return { value, label: children !== undefined ? children : value, groupValue, groupLabel, ...restProps };
  }
    return { value, label: children !== undefined ? children : value, ...restProps };
}