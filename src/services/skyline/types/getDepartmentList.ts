/**
 * 通过命令行生成
*/
export interface CarListInterface {
  source?: string;
}

export interface CarListParams {
  spm: string;
  name: string;
}
export interface JxShowRes {
  data?: boolean;
}

export interface JxShowRequest {
  spm: string;
  agent: number;
  token: string;
}
