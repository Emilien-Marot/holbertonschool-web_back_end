#!/usr/bin/env python3
"""
here you go
"""
import typing
import asyncio
import random


NoneType = type(None)


async def async_generator() -> typing.Generator[float, NoneType, NoneType]:
    """
    there we go
    :return:
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
