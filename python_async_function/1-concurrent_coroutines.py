#!/usr/bin/env python3
"""
here you go
"""


async def wait_n(n: int, max_delay: int) -> list[float]:
    """
    here we go
    :param n
    :param max_delay:
    :return:
    """
    list_delay = []
    wait_random = __import__('0-basic_async_syntax').wait_random
    for i in range(0, n):
        delay = await wait_random(max_delay)
        list_delay.append(delay)
    return list_delay
