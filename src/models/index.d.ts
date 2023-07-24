import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Data, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly zipcode?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Data, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly zipcode?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Data = LazyLoading extends LazyLoadingDisabled ? EagerData : LazyData

export declare const Data: (new (init: ModelInit<Data>) => Data) & {
  copyOf(source: Data, mutator: (draft: MutableModel<Data>) => MutableModel<Data> | void): Data;
}