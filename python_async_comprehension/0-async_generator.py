#!/usr/bin/env python3
"""
here you go
"""
import typing
import asyncio
import random


async def async_generator() -> typing.Generator[float, None, None]:
    """
    there we go
    :return:
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
