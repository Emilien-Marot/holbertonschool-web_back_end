#!/usr/bin/env python3
'''
Here you go
'''
import typing


def to_kv(k: 'str', v: typing.Union[int, float]) -> typing.Tuple[str, float]:
    '''
    here we go
    :param k:
    :param v:
    :return:
    '''
    return (k, v * v)
