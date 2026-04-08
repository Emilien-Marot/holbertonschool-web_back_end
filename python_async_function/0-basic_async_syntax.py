#!/usr/bin/env python3
'''
here you go
'''


async def wait_random(max_delay: float = 10) -> float:
    '''
    here we go
    :param max_delay:
    :return:
    '''
    from asyncio import sleep
    from random import random
    delay = max_delay * random()
    await sleep(delay)
    return delay