import type {
  Edge as ReactFlowEdge,
  Node as ReactFlowNode,
} from 'reactflow'

export enum BlockEnum {
  Start = 'start',
  End = 'end',
  DirectAnswer = 'direct-answer',
  LLM = 'llm',
  KnowledgeRetrieval = 'knowledge-retrieval',
  QuestionClassifier = 'question-classifier',
  IfElse = 'if-else',
  Code = 'code',
  TemplateTransform = 'template-transform',
  HttpRequest = 'http-request',
  VariableAssigner = 'variable-assigner',
  Tool = 'tool',
}

export type Branch = {
  id: string
  name: string
}

export type CommonNodeType = {
  position?: {
    x: number
    y: number
  }
  sortIndexInBranches?: number
  hovering?: boolean
  branches?: Branch[]
  title: string
  desc: string
  type: BlockEnum
}

export type Node = ReactFlowNode<CommonNodeType>
export type SelectedNode = Pick<Node, 'id' | 'data'>
export type Edge = ReactFlowEdge

export type ValueSelector = string[] // [nodeId, key | obj key path]

export type Variable = {
  variable: string
  value_selector: ValueSelector
}

export enum InputVarType {
  textInput = 'text-input',
  paragraph = 'paragraph',
  select = 'select',
  number = 'number',
  url = 'url',
  files = 'files',
}

export type InputVar = {
  type: InputVarType
  label: string
  variable: string
  max_length?: number
  default?: string
  required: boolean
  hint?: string
  options?: string[]
}

export type ModelConfig = {
  provider: string
  name: string
  mode: string
  completion_params: Record<string, any>
}

export enum PromptRole {
  system = 'system',
  user = 'user',
  assistant = 'assistant',
}

export type PromptItem = {
  role?: PromptRole
  text: string
}

export enum MemoryRole {
  user = 'user',
  assistant = 'assistant',
}

export type Memory = {
  role_prefix?: MemoryRole
  window: {
    enabled: boolean
    size: number | string | null
  }
}

export type Var = {
  variable: string
  type: string
  children?: Var[] // if type is obj, has the children struct
}

export type NodeOutPutVar = {
  nodeId: string
  title: string
  vars: Var[]
}

export type Block = {
  classification?: string
  type: BlockEnum
  title: string
  description?: string
}

export type NodeDefault<T> = {
  defaultValue: Partial<T>
  getAvailablePrevNodes: () => BlockEnum[]
  getAvailableNextNodes: () => BlockEnum[]
}